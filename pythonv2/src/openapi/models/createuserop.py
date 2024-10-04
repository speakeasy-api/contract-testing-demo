"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
from .user import User, UserTypedDict
from openapi.types import BaseModel
from openapi.utils import FieldMetadata, PathParamMetadata, RequestMetadata
import pydantic
from typing_extensions import Annotated, TypedDict


class CreateUserRequestTypedDict(TypedDict):
    id: str
    user: UserTypedDict


class CreateUserRequest(BaseModel):
    id: Annotated[
        str, FieldMetadata(path=PathParamMetadata(style="simple", explode=False))
    ]

    user: Annotated[
        User, FieldMetadata(request=RequestMetadata(media_type="application/json"))
    ]


class CreateUserResponseBodyTypedDict(TypedDict):
    r"""Success"""

    json_: UserTypedDict


class CreateUserResponseBody(BaseModel):
    r"""Success"""

    json_: Annotated[User, pydantic.Field(alias="json")]
