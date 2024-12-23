"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
from .user import User, UserTypedDict
from openapi.types import BaseModel
from openapi.utils import FieldMetadata, PathParamMetadata, RequestMetadata
from typing_extensions import Annotated, TypedDict


class UpdateUserRequestTypedDict(TypedDict):
    id: str
    user: UserTypedDict


class UpdateUserRequest(BaseModel):
    id: Annotated[
        str, FieldMetadata(path=PathParamMetadata(style="simple", explode=False))
    ]

    user: Annotated[
        User, FieldMetadata(request=RequestMetadata(media_type="application/json"))
    ]
