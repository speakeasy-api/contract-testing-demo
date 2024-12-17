// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"openapi/models/components"
)

type DeleteUserRequest struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

func (o *DeleteUserRequest) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

type DeleteUserResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
}

func (o *DeleteUserResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}