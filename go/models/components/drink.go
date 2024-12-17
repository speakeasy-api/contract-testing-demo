// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"encoding/json"
	"fmt"
)

type Type string

const (
	TypeBeer   Type = "Beer"
	TypeCoffee Type = "Coffee"
	TypeWine   Type = "Wine"
)

func (e Type) ToPointer() *Type {
	return &e
}
func (e *Type) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Beer":
		fallthrough
	case "Coffee":
		fallthrough
	case "Wine":
		*e = Type(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Type: %v", v)
	}
}

type Drink struct {
	ID    string  `json:"id"`
	Type  Type    `json:"type"`
	Price float64 `json:"price"`
}

func (o *Drink) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *Drink) GetType() Type {
	if o == nil {
		return Type("")
	}
	return o.Type
}

func (o *Drink) GetPrice() float64 {
	if o == nil {
		return 0.0
	}
	return o.Price
}